import ExpandButton from "../ExpandButton";

function ComponentContainer({
  children,
  Expand,
  ExpandComponent,
  CloseComponent,
  id,
  btnId,
  key
}) {
  return (
    <div>
      {children}
      <ExpandButton
        btnId={btnId}
        Expand={Expand}
        ExpandComponent={ExpandComponent}
        CloseComponent={CloseComponent}
      />
    </div>
  );
}

export default ComponentContainer;
