module.exports = {

	// expressions

	"IdentifierNode":     require('./expression/IdentifierNode'),

	"NumberNode":         require('./expression/NumberNode'),
	"AdditionNode":       require('./expression/AdditionNode'),
	"MultiplicationNode": require('./expression/MultiplicationNode'),

	"HighByteNode":       require('./expression/HighByteNode'),
	"LowByteNode":        require('./expression/LowByteNode'),

	"StringNode":         require('./expression/StringNode'),

	// emitters

	"OrgNode":            require('./emitter/OrgNode'),
	"DSNode":             require('./emitter/DSNode'),
	"DBNode":             require('./emitter/DBNode'),
	"DWNode":             require('./emitter/DWNode'),

	"InstructionNode":    require('./emitter/InstructionNode')

};
