"use client"

import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { postGameData } from "@/services/games";

export function GameDataForm({code}: {code: string}) {
    return (<form onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget)
                formData.get("fieldgroup-name");
                console.log(formData.get("fieldgroup-name"), formData.get("fieldgroup-value"))
                postGameData({
                    gameCode: code,
                    key: formData.get("fieldgroup-name") as string,
                    value: formData.get("fieldgroup-value") as string
                })
            }}>

                <FieldGroup className="grid grid-cols-4">
                    <Field>
                        <FieldLabel htmlFor="fieldgroup-name">Key<span className="text-destructive">*</span></FieldLabel>
                        <Input name="fieldgroup-name" placeholder="balance-enemies-power" required />
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="fieldgroup-value">Value</FieldLabel>
                        <Input
                            name="fieldgroup-value"
                            type="text"
                            placeholder="100"
                        />
                    </Field>
                    <Field orientation="horizontal">
                        <Button type="reset" variant="outline">
                            Reset
                        </Button>
                        <Button type="submit" className="w-full">Submit</Button>
                    </Field>
                </FieldGroup>
            </form>)
}