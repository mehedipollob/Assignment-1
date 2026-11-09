const multiplyValue = ( 
    value : number, 
    multipler?: number
) : number => {
   if(multipler === undefined){
     return value * 2;
   }else{
     return (value * multipler);
   }
}

function processInput(value: string | number | boolean): string | number {
    if (typeof(value) === "string") {
        return (value.trim().toLowerCase());

    } else if (typeof(value) === "number") {
        return (value * 10);

    } else {
        if (value) {
            return ("Active");
        } else {
            return ("Inactive");
        }
    }
}


function formatCoordinate(value: readonly [number, number, string]): string {
    const [latitude, longitude, locationName] = value;

    return `Location: ${locationName} (${latitude}, ${longitude})`;
}


function concatenateArrays<T>(...arrays: T[][]): T[] {
    let result: T[] = [];

    for (let array of arrays) {
        result = result.concat(array);
    }
    return (result);
}


interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}
const getPopularCourses = (
    courses: Course[],
    minStudents: number
): Course[] => {
    return courses.filter((course) => {
        return course.isPublished === true &&
               course.students >= minStudents;
    });
};


const pluckValues = <T, K extends keyof T>(
    items: T[],
    key: K
): T[K][] => {
    return items.map((item) => item[key]);
};

class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(): string {
        return (`Employee: ${this.name}, Base Salary: ${this.baseSalary}`);
    }
}

class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo(): string {
        return (`Manager of ${this.department}: ${this.name}`);
    }
}


async function validateAgeAsync(age: number): Promise<string> {
    if (age >= 18) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        });
    } else {
        throw new Error("Access Denied: Must be 18 or older");
    }
}