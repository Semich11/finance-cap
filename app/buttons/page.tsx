import { Button } from "@/components/ui/button";
const ButtonsPage = () => {
    return(
        <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
            <Button>DEFAULT</Button>
            <Button variant="primary" >PRIMARY</Button>
            <Button variant="primaryOutline" >PRIMARY OUTLINE</Button>
        </div>
    )
}

export default ButtonsPage;