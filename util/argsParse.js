export const argsParse = ([ , ,...argv]) => {
    const args = {};
        switch(argv[0]){
            case 'help': 
                args[argv[0]] = true;
                break;

            case 'add': 
                args[argv[0]] = argv[1];
                break;

            case 'list':
                args[argv[0]] = true;
                break;

            case 'get':
                args[argv[0]] = argv[1];
                break;

            case 'update':
                args[argv[0]] = [argv[1], argv[2]];
                break;

            case 'status':
                args[argv[0]] = [argv[1], argv[2]];
                break;

            case 'delete':
                args[argv[0]] = argv[1];
                break;

            default:
                args['default'] = true; 
            }
    return args;
};



