function Card({ className, children, ...props }) {
  return (
    <div
      className={`${className} group relative flex flex-col gap-4 rounded-2xl bg-[#1f1f1f] p-4`}
      {...props}
    >
      {children}
    </div>
  );
}

function CardTitle({ className, children, ...props }) {
  return (
    <h3
      className={`${className} flex w-full items-center justify-center text-lg font-bold text-nowrap text-[#fff]`}
      {...props}
    >
      {children}
    </h3>
  );
}

function CardContent({ className, children, ...props }) {
  return (
    <div
      className={`${className} flex flex-col items-center justify-center gap-4`}
      {...props}
    >
      {children}
    </div>
  );
}

function CardFooter({ className, children, ...props }) {
  return (
    <div
      className={`${className} flex w-full justify-between gap-2`}
      {...props}
    >
      {children}
    </div>
  );
}

export { Card, CardTitle, CardContent, CardFooter };
