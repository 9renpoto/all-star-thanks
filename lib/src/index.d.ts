/// <reference types="react" />
export declare type Row = {
    name: string;
    point: number;
    time: string;
};
export default function (props: {
    data: Array<Row>;
}): JSX.Element;
