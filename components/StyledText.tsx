import { Text, TextProps } from './Themed';

interface HeadingTextProps extends TextProps {
  fontSize?: 48 | 40 | 32 | 24 | 20 | 18
}

interface BodyTextProps extends TextProps {
  fontSize?: 18 | 16 | 14 | 12 | 10
}

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}

export function HeadingText(props: HeadingTextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'SoraBold', fontSize: props.fontSize }]} />;
}

export function BodyTextBold(props: BodyTextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'InterBold', fontSize: props.fontSize }]} />;
}

export function BodyTextSemiBold(props: BodyTextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'InterSemiBold', fontSize: props.fontSize }]} />;
}

export function BodyTextMedium(props: BodyTextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'InterMedium', fontSize: props.fontSize }]} />;
}

export function BodyTextRegular(props: BodyTextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'InterRegular', fontSize: props.fontSize }]} />;
}