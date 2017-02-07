declare module "appolo-express" {
    import * as Express from '@types/express'


    export class Midddleware {
        res: Express.Response;
        req: Express.Request;
        next: (err: any, data: any) => void;

        constructor(req: Express.Request, res: Express.Response, next: (err: any, data: any) => void, route: Route)

        run(req: Express.Request, res: Express.Response, next: (err: any, data: any) => void, route: Route)

        sendServerError(error?: any, code?: any)

        sendBadRequest(error?: any, code?: any)

        sendUnauthorized(error?: any, code?: any)

        sendNotFound(error?: any, code?: any)
    }
    export class EventDispatcher {

        on(event: string, fn: Function, scope: any): void

        un(event: string, fn: Function, scope: any): void

        fireEvent(event: string): void

        removeAllListeners()
    }
    export class Controller {

        res: Express.Response;
        req: Express.Request;
        next: (err: any, data: any) => void;

        constructor(req: Express.Request, res: Express.Response, next, route)

        initialize(): void

        invoke(action: string): void

        render(view, model): void

        send(statusCode: any, data: any): void

        sendOk(data?: any): void

        sendCreated(data: any): void

        sendNoContent(): void

        sendServerError(error?: any, code?: any): void

        sendBadRequest(error?: any, code?: any): void

        sendUnauthorized(error?: any, code?: any): void

        sendNotFound(error?: any, code?: any): void

        getName(): string
    }


    interface Route {

        new (controller: string|Function)
        path(pathPattern: string): Route
        action(action: string|Function): Route
        abstract(abstract: any): Route
        validation(key: any, validation: any): Route
        validations(key: any, validation: any): Route
        method(method: 'get'|'post'|'delete'|'patch'|'head'|'put'): Route
        environment(environment: string|string[]): Route
        environments(environment: string|string[]): Route
        middleware(middleware: string|string[]): Route
        middlewares(middleware: string|string[]): Route
        role(role: string|string[]): Route
        roles(role: string|string[]): Route
        route(controller: string): Route
    }

    export function route(controller: string|Function): Route

    export  import   validator =  require('@types/joi')

    export function use(func: Function)

    interface LaunchParams {
        templateEngine?: string,
        viewsFolder?: string,
        publicFolder?: string,
        uploadsFolder?: string,
        startMessage?: string,
        startServer?: boolean,
        loadDefaultConfigurations?: boolean
    }

    interface Launcher {
        launch(config?: LaunchParams, callback?: (err: any) => void): Promise<void>
        startServer()
        reset(soft: boolean)
    }

    export function launch(config?: LaunchParams, callback?: (err: any) => void)

    export let launcher: Launcher

}

declare module "appolo-express/decorators" {

    export function define(id?: string)

    export function singleton(singleton?: boolean)

    export function inject(name?: string, inject?: string)
    export function inject(name?: string)

    export function injectFactoryMethod(name: string, factoryMethod: string)

    export function injectAlias(name: string, alias: string)

    export function injectAliasFactory(name: string, alias: string)

    export function injectArray(name: string, arr: string)

    export function injectDictionary(name: string, dic: string)

    export function injectFactory(name: string, factory: string)

    export function injectObjectProperty(name: string, object: string, propertyName: string)

    export function injectValue(name: string, value: string)

    export function alias(alias: string)

    export function initMethod()

    export function aliasFactory(aliasFactory: string)


}
