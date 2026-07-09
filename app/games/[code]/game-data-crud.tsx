"use client"
import { GameParam } from "@/types/game-param"
import { GameDataTable } from "./game-data-table"
import { GameDataForm } from "./game-data-form"
import { useAuth } from "@/components/AuthProvider"

export function GameDataCrud({ code, params }: { code: string, params?: GameParam[] }) {
    const { user } = useAuth();
    return (
        <>
            <h1 className="text-2xl font-bold text-center">Parameters</h1>
            { user?.modify && <GameDataForm code={code} /> }
            <div>
                <GameDataTable data={params?.map((p) => ({ key: p.key, value: p.value }))} />
            </div>
        </>
    )
}
