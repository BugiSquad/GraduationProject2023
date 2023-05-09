import React from "react";

export interface PageHeaderParam {
    pageHeaderName: String;
    variant: String;
    showBackButton: Boolean;
}

export enum BottomNavigationTab {
    APP, COMMUNITY, MENU, CART, MYPAGE,
}

export interface SimpleHeaderParam {
    pageHeaderName: String;
    tab: BottomNavigationTab;
}

