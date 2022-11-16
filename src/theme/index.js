import { extendTheme } from "@chakra-ui/react";

const myTheme = extendTheme({
    components: {
        Button: {
            variants: {
                base: {
                    color: 'white',
                    fontSize: '1rem',
                    w: '80px',
                    h: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    float: 'right',
                    bg: '#53c4e4',
                    borderRadius: '30px',
                    _hover: {
                        color: 'black',
                        bg: '#76d8f3'
                    },
                },
                defaultProps: {
                    variant: "base",
                },

            }
        },
        Text: {
            variants: {
                base: {
                    fontSize: '18px',
                    literspacing: '1',
                }, sm: {
                    fontSize: '14px',
                    literspacing: '1px',
                }, md: {
                    fontSize: '16px',
                    literspacing: '1',
                }, lg: {
                    fontSize: '18px',
                    literspacing: '1',
                }
            }
        },
        Flex: {
            baseStyle: {
                base: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                sm: {
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                md: {
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                lg: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                defaultprops: {
                    variant: 'base'
                }
            }
        }

    },
});

export default myTheme;