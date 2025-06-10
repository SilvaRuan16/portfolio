import { ContainerTypes } from "../types/ContainerTypes";

export default function Container( {children, className} : ContainerTypes ) {
  return (
    <div className={`h-auto w-full ${className}`}>
      {children}
    </div>
  )
}