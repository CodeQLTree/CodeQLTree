/**
 * @name oui
 * @description dfs
 * @kind alert
 * @id 123
 */
import javascript
from Expr e where e.toString() = "coucou" select e, "ff"
class BestClass extends Expr {
    BestClass() {
        this.toString() = "coucou"
    }
}// from MethodCallExpr mce where mce.getMethodName() = "ff" select mce, "cc"