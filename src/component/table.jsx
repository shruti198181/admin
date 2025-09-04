import React from "react";

export function Table({ children, className = "" }) {
  return (
    <div className="w-full overflow-auto">
      <table className={`w-full caption-bottom text-sm ${className}`}>
        {children}
      </table>
    </div>
  );
}

export function TableHeader({ children, className = "" }) {
  return <thead className={className}>{children}</thead>;
}

export function TableBody({ children, className = "" }) {
  return (
    <tbody
      className={`[&_tr:last-child]:border-0 border-t border-gray-200 ${className}`}
    >
      {children}
    </tbody>
  );
}

export function TableRow({ children, className = "" }) {
  return (
    <tr
      className={`border-b transition-colors hover:bg-gray-100/50 ${className}`}
    >
      {children}
    </tr>
  );
}

export function TableHead({ children, className = "" }) {
  return (
    <th
      className={`h-10 px-2 text-left align-middle font-medium text-gray-700 ${className}`}
    >
      {children}
    </th>
  );
}

export function TableCell({ children, className = "" }) {
  return (
    <td
      className={`p-2 align-middle text-gray-900 ${className}`}
    >
      {children}
    </td>
  );
}
export function TableCaption({ children, className = "" }) {
  return (
    <caption
      className={`mt-4 text-sm text-gray-500 text-center ${className}`}
    >
      {children}
    </caption>
  );
}
