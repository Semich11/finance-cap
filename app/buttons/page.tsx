import { Button } from "@/components/ui/button";
const ButtonsPage = () => {
    return(
        <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
            <Button>DEFAULT</Button>
            <Button variant="primary" >PRIMARY</Button>
            <Button variant="primaryOutline" >PRIMARY OUTLINE</Button>
            <Button variant="secondary" >SECONDARY</Button>
            <Button variant="secondaryOutline" >SECONDARY OUTLINE</Button>
            <Button variant="danger" >DANGER</Button>
            <Button variant="dangerOutline" >DANGER OUTLINE</Button>
            <Button variant="super" >DANGER</Button>
            <Button variant="superOutline" >DANGER OUTLINE</Button>
            <Button variant="ghost" >GHOST</Button>
        </div>
    )
}

export default ButtonsPage;