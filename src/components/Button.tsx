// src/components/Button.tsx
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
};

export function Button({ variant = 'primary', ...props }: ButtonProps) {
  const base = 'btn ' + (variant === 'primary' ? 'btn-primary' : 'btn-ghost');
  return <button className={base} {...props} />;
}
