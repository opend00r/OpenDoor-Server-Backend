const db = require('nedb')

export const database = new db({filename: 'database.db', autoload: true})
console.log('db.js', database)

/*
import db from "nedb";
import { User } from "./auth";

export const UserDatabase = new db({ filename: 'UserDatabase.db', autoload: true });
export const CardDatabase = new db({ filename: 'CardDatabase.db', autoload: true });
export const TypeDatabase = new db({ filename: 'TypeDatabase.db', autoload: true });

export class DBObject {
    public toJson() {
        return JSON.parse(JSON.stringify(this));
    }
}

export class DBUser extends DBObject {
    username: string = "";
    password: string = "";
    roles: Array<string> = [];

    public constructor(init?: Partial<DBUser>) {
        super()
        Object.assign(this, init);
    }
}

export class DBCard extends DBObject {
    name: string = "";

    public constructor(init?: Partial<DBCard>) {
        super()
        Object.assign(this, init);
    }
}

export class DBType extends DBObject {
    category: string = "";
    type: string = "";

    public constructor(init?: Partial<DBType>) {
        super()
        Object.assign(this, init);
    }
}

export class UserSystem {
    public newUser(username:string, password:string, roles:Array<string> = []) : any {
        let user = this.getUser(username);
        
        if (user == null) {
            UserDatabase.insert<DBUser>(new DBUser({username, password, roles}))
            return {pass: true, message: "User Created"};
        } else {
            return {pass: false, message: "User Exists."};
        }
    }

    public delUser(username:string) {
        let user = this.getUser(username);
        
        if (user != null) {
            UserDatabase.remove(username);
            return {pass: true, message: "User Removed"};
        } else {
            return {pass: false, message: "User Isn't real."};
        }
    }

    public changeRoles(username:string, roles:Array<string>) {
        let user = this.getUser(username);
        
        if (user != null) {
            this.getUser(username)!.roles = roles;
            return {pass: true, message: "User Changed"};
        } else {
            return {pass: false, message: "User Isn't real."};
        }
    }

    public checkUser(username:string, password:string) : DBUser | null {
        let u = this.getUser(username);
        if (u?.password == password) {
            return u;
        } else {
            return null;
        }
    }

    public getUser(username:string) : DBUser | null {
        let u = null
        UserDatabase.findOne<DBUser>({ username }, function (err, doc) {
            if (doc != null)
                u = doc
        });

        return u;
    }
}

export class CardSystem {
    public newCard() {}
    public delCard() {}
    public changeCard() {}
    public getCard() {}
}

export class TypeSystem {
    public newCat() {}
    public delCat() {}

    public newType() {}
    public delType() {}
}
*/