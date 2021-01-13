import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';


const SystemMapButton = withStyles((theme) => {
  return {
      root: {
        backgroundColor: theme.palette.primary.main,
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: theme.palette.secondary.main,
        boxShadow: `5px 5px 3px -1px ${theme.palette.secondary.main}`,
        borderRadius: 12,
        height: 100
      }
    }
})(Button)

export default SystemMapButton