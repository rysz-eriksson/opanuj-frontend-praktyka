import { Dispatch, FC } from "react"

export const ToDoFilter: FC<{setFilter: Dispatch<React.SetStateAction<boolean>>}> = ({setFilter}) => {

    const handleFilterChange = (event: any) => {
        console.log("event", event)
        setFilter(event.target.checked)
    }

    return (
        <div className="flex items-center space-x-2">
            <input 
                onChange={handleFilterChange}
                type="checkbox" 
                id="todoCheck" 
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" 
            />
            <label htmlFor="todoCheck" className="text-sm font-medium text-gray-900">Show only not finished yet</label>
        </div>
    )
}