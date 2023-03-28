import {ReactNode} from "react";
import {PageHeaderParam} from "./PageHeaderParam";

export interface PageTemplateProps {
    children: ReactNode;
    pageHeader: PageHeaderParam;
}
