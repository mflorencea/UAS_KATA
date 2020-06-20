import { EventData } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";
import { Page } from "tns-core-modules/ui/page";

export function navigateToFeatured(args: EventData) {
    const button: Button = <Button>args.object;
    const page: Page = button.page;
    page.frame.navigate("featured-page");
}

export function navigateToBrowse(args: EventData) {
    const button: Button = <Button>args.object;
    const page: Page = button.page;
    page.frame.navigate("browse-page");
}

export function navigateToSearch(args: EventData) {
    const button: Button = <Button>args.object;
    const page: Page = button.page;
    page.frame.navigate("search-page");
}