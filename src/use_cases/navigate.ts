import { ActionCallback } from "../ui/action_dispatcher";

interface Props {
    route: string;
    reset?: boolean;
}

class NavigateUseCase implements ActionCallback {
    constructor(private navigator: any) {
        if (!navigator) throw new Error('navigator cant be null');
    }

    async execute({ route, reset }: Props): Promise<void> {

        if (!reset) this.navigator.navigate(route);
        else {
            this.navigator.reset({ index: 0, routes: [{ name: route }] });
        }
    }
}

export default NavigateUseCase;
