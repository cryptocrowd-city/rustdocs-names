initSidebarItems({"enum":[["Void","The void type - it cannot exist."]],"fn":[["print","Print something that implements `Printable` from the runtime."]],"macro":[["assert_err","Panic if an expression doesn't evaluate to an `Err`."],["assert_noop","Evaluate an expression, assert it returns an expected `Err` value and that runtime storage has not been mutated (i.e. expression is a no-operation)."],["assert_ok","Panic if an expression doesn't evaluate to `Ok`."],["construct_runtime","Construct a runtime, with the given name and the given modules."],["decl_error","Declare an error type for a runtime module."],["decl_event","Implement the `Event` for a module."],["decl_module","Declares a `Module` struct and a `Call` enum, which implements the dispatch logic."],["decl_storage","Declares strongly-typed wrappers around codec-compatible types in storage."],["ensure","Evaluate `$x:expr` and if not true return `Err($y:expr)`."],["fail","Return Err of the expression: `return Err($expression);`."],["impl_outer_dispatch","Implement a meta-dispatch module to dispatch to other dispatchers."],["impl_outer_event","Constructs an Event type for a runtime. This is usually called automatically by the construct_runtime macro."],["impl_outer_inherent","Implement the outer inherent. All given modules need to implement `ProvideInherent`."],["impl_outer_origin","Constructs an Origin type for a runtime. This is usually called automatically by the construct_runtime macro. See also __create_decl_macro."],["impl_outer_validate_unsigned","Implement `ValidateUnsigned` for `Runtime`. All given modules need to implement `ValidateUnsigned`."],["impl_runtime_metadata","Implements the metadata support for the given runtime and all its modules."],["parameter_types","Macro for easily creating a new implementation of the `Get` trait. Use similarly to how you would declare a `const`:"],["runtime_print","Print out a formatted message."]],"mod":[["debug","Runtime debugging and logging utilities."],["dispatch","Dispatch system. Contains a macro for defining runtime modules and generating values representing lazy module function calls."],["error","Macro for declaring a module error."],["event","Macros that define an Event types. Events can be used to easily report changes or conditions in your runtime to external entities like users, chain explorers, or dApps."],["inherent",""],["metadata",""],["storage","Stuff to do with the runtime's storage."],["traits","Traits for SRML."],["unsigned",""],["weights","Primitives for transaction weighting."]],"struct":[["Blake2_128","Hash storage keys with blake2 128"],["Blake2_128Concat","Hash storage keys with `concat(blake2_128(key), key)`"],["Blake2_256","Hash storage keys with blake2 256"],["Twox128","Hash storage keys with twox 128"],["Twox256","Hash storage keys with twox 256"],["Twox64Concat","Hash storage keys with `concat(twox64(key), key)`"]],"trait":[["Hashable",""],["Printable","Trait for things which can be printed from the runtime."]],"type":[["ConsensusEngineId","Consensus engine unique ID."]]});