function withHOC(Component: any) {
  return function (props: any) {
    // add some sort of extra logic before calling the specified component
    return <Component {...props} />;
  };
}
