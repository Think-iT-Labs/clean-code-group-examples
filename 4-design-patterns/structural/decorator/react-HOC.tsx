function withHOC(Component: any) {
  return function (props: any) {
    // add some sort of extra logic before calling the specified component

    const name = props.name.toUpperCase();
    return <Component name={name} {...props} />;
  };
}
