// We will need to access history from outside components.
// The only way to do this is create our own history and pass it to the router.
// https://github.com/ReactTraining/react-router/blob/master/FAQ.md#how-do-i-access-the-history-object-outside-of-components
import { createBrowserHistory } from "history";

export default createBrowserHistory();
