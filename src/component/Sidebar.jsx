import { useDispatch, useSelector } from "react-redux";
import { activate_active, completed_active } from "../features/tabs/tabsSlice";

const Sidebar = () => {
  const { active } = useSelector(store => store.tabs); 

  const dispatch = useDispatch();

  return (
    <aside className="sidebar">
      <div className="tabs">
        <button className={`tab tab-2 ${active && 'active'}`} onClick={() => dispatch(activate_active())}>active</button>
        <button className={`tab tab-3 ${!active && 'active'}`} onClick={() => dispatch(completed_active())}>completed</button>
      </div>
    </aside>
  );
};

export default Sidebar;