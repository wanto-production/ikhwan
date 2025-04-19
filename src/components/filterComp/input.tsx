import { Input } from "../ui/input";
import { Select,SelectContent,SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { input } from "./state";
import { useStore } from "@nanostores/react"

export function InputFilter(){
  const inputs = useStore(input)

  return(
    <div className=" w-[89%] p-2 rounded-md shadow-2xl flex gap-2">
      <Input type="text" value={inputs.text} onChange={e => input.set({ ...inputs, text: e.target.value })} placeholder="search by title" />
      <Select onValueChange={e => input.set({ ...inputs, select: e })} value={inputs.select}>
        <SelectTrigger>
          <SelectValue placeholder="category"/>
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="all">all</SelectItem>
            <SelectItem value="anime">anime</SelectItem>
            <SelectItem value="tech">tech</SelectItem>
        </SelectContent>
      </Select> 
    </div>
  )
}
