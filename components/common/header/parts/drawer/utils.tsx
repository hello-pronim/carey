const getActiveProps = (active) => {
  if (active !== null) {
    let activeProps = {
      top: active.offsetTop,
      left: active.offsetLeft,
      height: active.offsetHeight,
      width: active.offsetWidth,
    };
    return activeProps;
  }
};

const getSubItems = (navItems, activeItem) => {
  if (activeItem?.dataset?.key) {
    const items = navItems?.find(
      (item) => item.id === activeItem.dataset?.key
    )?.subItems;
    return items;
  }
  return null;
};

export { getActiveProps, getSubItems };
