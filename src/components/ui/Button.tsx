type ButtonProps = {
  children: React.ReactNode;
};

export function Button({ children }: ButtonProps) {
  return (
    <button className="action-btn primary" type="button">
      {children}
    </button>
  );
}
