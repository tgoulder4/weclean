- tsc not responding? amend in tsconfig then use yarn tsc.
- passing down classnames doesn't work: only works if I do something like 
```ts
const Button = ({
    text,
    className,
    style,
    ...others
}: buttonProps) => {
    return (<Pressable {...others} style={[style, { *other styles* }]} className={className + ` *other classnames* `} >
            <Text>{text}</Text>
     </Pressable>
```