# OOPs Concepts

* OOPS is wrapping of pieces of data with related behavior
* Class is a blue print, where we can create numnber of objects from the class
* A class contains state (fields) and methods (behavior)
* Class hierachy: we will have parent to child relation where child can inherit the default behaviour(state, methods) which child can completely ovveride or add some extra state and behavior to it.

## Pillars of OOP
* Abstraction : Abstraction is a model of real world phenomenon limited to specific context which represents all details relevent to this context with high accuracy omits all the rest. for Example, an airplane class can be used in two different contexts with two different state and behavior.
* Encapsulation: Encapsulation is ability of an object to hide implementation details and and showing which are all needed for the outer world. Encapsulation means making **private** and there will be another restrictive mode is there known as **protected** which allows subclasses to access it.
* Interfaces or protocol : it is a protocol for an object with deals only with the behavior(methods) and classes derrived from the interface should have the behabior defined in the interface.
* Inheitence : It is the ability built new classes on top of existing classes. helps us creating code reuse.
* In most of the programming languages a subclass can only extend one superclass, on the other hand any class can implement several interfaces. and if a superclass implements any interface , then a subclass also must implement those behavior from interface of superclass
* Abstract method : let us to omit default method behaviour from super class
* Polymorphism : It is a ability of an object to detect the real class of an object and call its implementation even its real type is unknown in the context. for example there is a bag of cats and dogs and we are picking one by one with blinded eyes and when we cuddle them it makes sound of thier own, this is polymorphism, and cats and dogs pretending to be general animals. but cats and dogs have their own implementation for the behavior
  
