"use clinet";
import { Button } from "./ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";

function AlertModal({
    trigger,
    title,
    description,
    submit,
}: {
    trigger: () => JSX.Element;
    title: string;
    description?: string;
    submit: any;
}) {
    return (
        <Dialog>
            <DialogTrigger className="w-full">{trigger()}</DialogTrigger>
            <DialogContent>
                <DialogTitle>
                    {title}
                    <br />
                    {description ||
                        "This will delete the data from our database."}
                </DialogTitle>
                <DialogFooter>
                    <Button
                        onClick={async () => {
                            submit();
                        }}
                    >
                        Delete
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default AlertModal;
