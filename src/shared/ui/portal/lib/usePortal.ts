import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

function createRootElement(id: string) {
  const rootContainer = document.createElement('div');
  rootContainer.setAttribute('id', id);
  return rootContainer;
}

// @ts-ignore
function addRootElement(rootElem) {
  document.body.insertBefore(
    rootElem,
    // @ts-ignore
    document.body.lastElementChild.nextElementSibling,
  );
}

export function usePortal(id: string, isRemovable?: boolean) {
  const rootElemRef = useRef<HTMLDivElement>(null);

  let location = useLocation();

  useEffect(
    function setupElement() {
      const existingParent = document.querySelector(`#${id}`);
      const parentElem = existingParent || createRootElement(id);

      if (!existingParent) {
        addRootElement(parentElem);
      }
      parentElem.appendChild(rootElemRef.current!);

      return function removeElement() {
        if (isRemovable ?? true) {
          rootElemRef.current!.remove();
          if (!parentElem.childElementCount) {
            parentElem.remove();
          }
        }
      };
    },
    [id, location],
  );

  function getRootElem() {
    if (!rootElemRef.current) {
      // @ts-ignore
      rootElemRef.current = document.createElement('div');
    }
    return rootElemRef.current;
  }

  return getRootElem();
}
