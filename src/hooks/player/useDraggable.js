import { useEffect } from 'react';

const useDraggable = (container, controller) => {
  function dragElement(r, c) {
    let pos1 = 0;
    let pos2 = 0;
    let pos3 = 0;
    let pos4 = 0;
    c.current.onmousedown = dragMouseDown;
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      r.current.style.top = `${r.current.offsetTop - pos2}px`;
      r.current.style.left = `${r.current.offsetLeft - pos1}px`;
    }
    function closeDragElement(e) {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  useEffect(() => {
    if (container.current && controller.current) {
      dragElement(container, controller);
    }
  }, [container, controller]);
};

export default useDraggable;
