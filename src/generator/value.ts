import {
	address,
	internet,
	image,
	lorem,
	name,
	phone,
	random,
	system,
} from "faker";
import { IElement } from "./element";
import { randomString } from "../utils/random-string";
export interface IValueGenerator {
	get(value: string): any;
	setNext(next: IValueGenerator): void;
}
export abstract class BaseGenerator implements IValueGenerator {
	next: IValueGenerator;
	type = "static";
	value: string;
	protected abstract generate(): any;
	get(value: string) {
		this.value = value;
		if (this.value === this.type) {
			return this.generate();
		} else {
			return this.next.get(this.value);
		}
	}
	setNext(next: IValueGenerator): void {
		if (this.next) {
			this.next.setNext(next);
		} else {
			this.next = next;
		}
	}
}
// static
export class StaticGenerator extends BaseGenerator {
	protected generate() {
		return this.value;
	}
	get(value: string) {
		this.value = value;
		return this.generate();
	}
}
// primitives
export class StringGenerator extends BaseGenerator {
	type = "string";
	protected generate() {
		return randomString();
	}
}
export class NumberGenerator extends BaseGenerator {
	type = "number";
	protected generate() {
		return random.number();
	}
}
export class BooleanGenerator extends BaseGenerator {
	type = "boolean";
	protected generate() {
		return random.boolean();
	}
}
export class NullGenerator extends BaseGenerator {
	type = "null";
	protected generate(): any {
		return null;
	}
}
export class UndefinedGenerator extends BaseGenerator {
	type = "undefined";
	protected generate(): any {
		return undefined;
	}
}
// person
export class FirstNameGenerator extends BaseGenerator {
	type = "firstname";
	protected generate() {
		return name.firstName();
	}
}
export class LastNameGenerator extends BaseGenerator {
	type = "lastname";
	protected generate() {
		return name.lastName();
	}
}
export class NameGenerator extends BaseGenerator {
	type = "name";
	protected generate() {
		return name.findName();
	}
}
// internet
export class EmailGenerator extends BaseGenerator {
	type = "email";
	protected generate() {
		return internet.email();
	}
}
// random
export class UuidGenerator extends BaseGenerator {
	type = "uuid";
	protected generate() {
		return random.uuid();
	}
}
// image
export class ImageGenerator extends BaseGenerator {
	type = "image";
	protected generate() {
		return random.image();
	}
}
export class ValueGeneratorFactory implements IValueGenerator {
	generator: IValueGenerator;
	constructor() {
		this.generator = new StringGenerator();
		this.generator.setNext(new NumberGenerator());
		this.generator.setNext(new BooleanGenerator());
		this.generator.setNext(new NullGenerator());
		this.generator.setNext(new UndefinedGenerator());
		this.generator.setNext(new FirstNameGenerator());
		this.generator.setNext(new LastNameGenerator());
		this.generator.setNext(new NameGenerator());
		this.generator.setNext(new EmailGenerator());
		this.generator.setNext(new UuidGenerator());
		this.generator.setNext(new ImageGenerator());
		this.generator.setNext(new StaticGenerator());
	}
	setNext(): void {}
	get(value: string) {
		return this.generator.get(value);
	}
}
// TODO, remove this
export class StaticValue<T> implements IElement {
	value: T;
	constructor(value: T) {
		this.value = value;
	}
	generate(): T {
		return this.value;
	}
}
export class StringValue implements IElement {
	generate(): string {
		return "RgerGERrrJR";
	}
}
export class NameValue implements IElement {
	generate(): string {
		return name.firstName();
	}
}
export class EmailValue implements IElement {
	generate(): string {
		return "rolly@codemente.com";
	}
}