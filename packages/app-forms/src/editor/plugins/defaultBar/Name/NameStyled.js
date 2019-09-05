// @flow
import styled from "@emotion/styled";
import { css } from "emotion";

export const NameInputWrapper = styled("div")({
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    "> .mdc-text-field--upgraded": {
        height: 35,
        marginTop: "0 !important",
        paddingLeft: 10,
        paddingRight: 40
    }
});

export const NameWrapper = styled("div")({
    height: 50,
    display: "flex",
    alignItems: "baseline",
    justifyContent: "flex-start",
    flexDirection: "column",
    color: "var(--mdc-theme-text-primary-on-background)",
    position: "relative",
    width: "100%",
    marginLeft: 10
});

export const FormName = styled("div")({
    border: "1px solid transparent",
    fontSize: 20,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "100%",
    lineHeight: "120%",
    "&:hover": {
        border: "1px solid var(--mdc-theme-on-background)"
    }
});

export const formNameWrapper = css({
    maxWidth: "calc(100% - 50px)"
});

export const FormVersion = styled("span")({
    fontSize: 20,
    color: "var(--mdc-theme-text-secondary-on-background)",
    marginLeft: 5,
    lineHeight: "120%"
});

export const FormMeta = styled("div")({
    height: 20,
    margin: "-2px 2px 2px 2px"
});
