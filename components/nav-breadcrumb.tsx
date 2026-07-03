"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { useSelectedLayoutSegments } from 'next/navigation'

export function NavBreadcrumb() {
      const segments = useSelectedLayoutSegments()

        return ( <Breadcrumb>
            <BreadcrumbList>
                {
                    segments.slice(0,-1).map((segment, index) => {
                        return (
                            [
                                <BreadcrumbItem key={index}>
                                    <BreadcrumbLink className="capitalize" href={`/${segments.slice(0, index + 1).join('/')}`}>{segment}</BreadcrumbLink>
                                </BreadcrumbItem>,
                                <BreadcrumbSeparator />
                            ]
                        );
                    })
                }

                <BreadcrumbItem>
                    <BreadcrumbPage className="capitalize">{segments[segments.length - 1] || ''}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb> )
}