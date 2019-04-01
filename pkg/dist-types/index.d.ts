import { FunctionComponent, ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';
declare type ReplaceCallback = (content: string) => ReactNode;
declare type Enhancers = {
    [key: string]: ReplaceCallback;
};
interface IFormattedEnhancedMessageProps {
    enhancers: Enhancers;
}
export declare const FormattedEnhancedMessage: FunctionComponent<IFormattedEnhancedMessageProps & FormattedMessage.Props>;
export {};
