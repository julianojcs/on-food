import { Header } from "@/components";
import { PageProps } from "./types";

export const PageTemplate = ({ ...props }: PageProps) => {
  return (
    <>
      <Header />
      <main>
        <div className='max-w-7xl mx-auto'>{props.children}</div>
      </main>
    </>
  )
}
