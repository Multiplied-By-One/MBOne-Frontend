import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';


const GenericButton = withStyles((theme) => {
  return {
      root: {
        backgroundColor: theme.palette.primary.main,
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: theme.palette.secondary.main,
        boxShadow: `5px 5px 3px -1px ${theme.palette.primary.main}`,
        borderRadius: 12,
        padding: '1%'
      }
    }
})(Button)

export default GenericButton