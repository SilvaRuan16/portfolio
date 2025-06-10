import { ContainerTypes } from "../types/ContainerTypes";

export default function Container( {children, className} : ContainerTypes ) {
  return (
    <div className={`h-auto max-w-[440px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-full ${className}`}>
      {children}
    </div>
  )
}