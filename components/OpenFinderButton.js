'use client';

export default function OpenFinderButton({ className, children }) {
  function handleClick() {
    window.dispatchEvent(new CustomEvent('open-finder'));
  }

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}