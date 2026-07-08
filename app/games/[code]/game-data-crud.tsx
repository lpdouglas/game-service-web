"use client"
import { GameParam } from "@/types/game-param"
import { GameDataTable } from "./game-data-table"
import { GameDataForm } from "./game-data-form"

export function GameDataCrud({ code, params }: { code: string, params?: GameParam[] }) {
    return (
        <>
            <h1 className="text-2xl font-bold text-center">Parameters</h1>
            { <GameDataForm code={code} /*TODO hidden={unauthorized}*/ /> }
            <div>
                <GameDataTable data={params?.map((p) => ({ key: p.key, value: p.value }))} />
            </div>
        </>
    )
}
