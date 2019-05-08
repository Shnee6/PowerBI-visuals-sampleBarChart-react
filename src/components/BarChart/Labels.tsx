/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
import * as React from "react";

import { 
    LABELS_PADDING, BAR_PADDING
} from "../../constants";

import { Entry } from "./types";

export interface Props {
    x?: number;
    y?: number;
    width: number;
    height: number;
    entries: Entry[];
}

export const Labels: React.FunctionComponent<Props> = (
    props: Props
) => {
    const { entries, width, height, x, y } = props;
    console.log('Labels', entries, height, entries.length, height / entries.length);
    
    return (
    <g 
        className="bar-chart-labels"
        height={height}
        width={width}
        x={x || 0}
        y={y || 0}  
        >
        {   entries.map((entry, index) =>
                <text
                    x={width - LABELS_PADDING}
                    y={(height / entries.length) * index - BAR_PADDING}
                    >
                    {entry.name}
                </text>
            )
        }
    </g>
    );
}