"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Fragment } from "react"
import { useSelectedLayoutSegments } from 'next/navigation'

export function NavBreadcrumb() {
      const segments = useSelectedLayoutSegments()

        return ( <Breadcrumb>
            <BreadcrumbList>
                {
                    segments.slice(0,-1).map((segment, index) => (
                        <Fragment key={`${segment}-${index}`}>
                            <BreadcrumbItem>
                                <BreadcrumbLink className="capitalize" href={`/${segments.slice(0, index + 1).join('/')}`}>{segment}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                        </Fragment>
                    ))
                }

                <BreadcrumbItem>
                    <BreadcrumbPage className="capitalize">{segments[segments.length - 1] || ''}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb> )
}