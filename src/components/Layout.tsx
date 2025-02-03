type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return <div className="flex flex-col flex-grow w-full max-w-7xl mx-auto px-5 sm:px-10">{children}</div>;
}
