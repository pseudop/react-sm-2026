import ChildDos from "./ChildDos";
import ChildUno from "./ChildUno";

const Parent = () => {
  const parentSyles = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '12px',
    margin: '12px',
  };

  return (
    <div style={parentSyles}>
      <ChildUno />
      <ChildDos />
    </div>
  );
}
 
export default Parent;