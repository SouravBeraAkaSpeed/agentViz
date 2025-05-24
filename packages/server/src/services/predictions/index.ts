import { Request } from 'express'
import { StatusCodes } from 'http-status-codes'
import { utilBuildChatflow } from '../../utils/buildChatflow'
import { InternalagentVizError } from '../../errors/internalagentVizError'
import { getErrorMessage } from '../../errors/utils'

const buildChatflow = async (fullRequest: Request) => {
    try {
        const dbResponse = await utilBuildChatflow(fullRequest)
        return dbResponse
    } catch (error) {
        throw new InternalagentVizError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `Error: predictionsServices.buildChatflow - ${getErrorMessage(error)}`
        )
    }
}

export default {
    buildChatflow
}
