import llvm from "llvm-node";

class Compiler {
    context = new llvm.LLVMContext()
    module = new llvm.Module('yapislang', this.context);
    builder = new llvm.IRBuilder(this.context);

    TYPES = {
        'void': llvm.Type.getVoidTy(this.context),
        'char': llvm.Type.getInt8Ty(this.context),
        'string': llvm.Type.getInt8PtrTy(this.context),
        'string[]': llvm.Type.getInt8PtrTy(this.context),
        'int': llvm.Type.getInt32Ty(this.context),
    }

    FUNCTION_TYPES = {
        'void': llvm.FunctionType.get(this.TYPES['void'], false),
        'char': llvm.FunctionType.get(this.TYPES['char'], false),
        'string': llvm.FunctionType.get(this.TYPES['string'], false),
        'string[]': llvm.FunctionType.get(this.TYPES['string[]'], false),
        'int': llvm.FunctionType.get(this.TYPES['int'], false),
    }

    DEFAULT_FUNCTIONS = {
        'print': this.module.getOrInsertFunction("printf", llvm.FunctionType.get(
            llvm.Type.getInt8PtrTy(this.context),
            [llvm.Type.getInt8PtrTy(this.context, 0)],
            true
        )),
    }

    DEFAULT_FUNCTIONS_LOGIC = {
        'print': this.callPrintf.bind(this)
    }

    constructor() {
        this.mainFunc = llvm.Function.create(this.FUNCTION_TYPES.void, llvm.LinkageTypes.ExternalLinkage, 'main', this.module)

        this.mainBlock = new llvm.BasicBlock.create(this.context, 'main', this.mainFunc);
        this.activeBlock = this.mainBlock;
    }

    callPrintf(string) {
        this.builder.createCall(
            this.DEFAULT_FUNCTIONS.print.functionType,
            this.DEFAULT_FUNCTIONS.print.callee, [string], 'printf');
    }

    print() {
        const ll = this.module.print();

        console.log(ll);

        return ll;
    }

    write() {
        this.builder.createRetVoid();

        llvm.verifyFunction(this.mainFunc)

        llvm.writeBitcodeToFile(this.module, 'test.bc');
    }

    /**
     * @param {llvm.BasicBlock} bb
     */
    set activeBlock(bb) {
        this.builder.setInsertionPoint(bb);
    }

    createFunction(type, name) {
        const func = llvm.Function.create(this.FUNCTION_TYPES[type], llvm.LinkageTypes.ExternalLinkage, name, this.module)

        const bb = new llvm.BasicBlock.create(this.context, name, func);

        this.activeBlock = bb;

        return func;
    }

    closeFunction(func) {
        llvm.verifyFunction(func);

        this.activeBlock = this.mainBlock;
    }

    getValue(type, value) {
        if (type === "char") {
            return llvm.ConstantInt.get(this.context, value.charCodeAt(0), 8)
        } else if (type === "int") {
            return llvm.ConstantInt.get(this.context, value, 32)
        } else if (type === "string") {
            return this.builder.createGlobalStringPtr(value.toString())
        } else if (type === "bool") {
            return (!!value ? llvm.ConstantInt.getTrue() : llvm.ConstantInt.getFalse())
        } else if (type === "string[]") {
            return value.map(el => el.split("").map(char => {
                return llvm.ConstantInt.get(this.context, char.charCodeAt(0), 8)
            }))
        }
    }
}

export default new Compiler();